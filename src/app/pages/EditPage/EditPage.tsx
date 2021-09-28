import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Header from '../../components/Header/Header';
import GearSelector from '../../components/GearSelector/GearSelector';
import GearInput from '../../components/GearInput/GearInput';
import SaveButton from '../../components/SaveButton/SaveButton';
import style from './EditPage.module.css';
import useFetch from '../../hooks/useFetch';
import type { Gear } from '../../../types';

export default function EditPage(): JSX.Element {
  const history = useHistory();
  const params = useParams<{ name: string }>();

  const { data: gear, isLoading } = useFetch<Gear>(`/api/gear/${params.name}`);
  // console.log(gear);

  const [selectedGear, setSelectedGear] = useState<'Drum' | 'Synth' | 'Effect'>(
    'Synth'
  );

  const [output, setOutput] = useState<string>('');
  const [isOutputChecked, setIsOutputChecked] = useState(false);

  const [input, setInput] = useState<string>('');
  const [isInputChecked, setIsInputChecked] = useState(false);

  const [midi_in, setMidi_in] = useState<string>('');
  const [isMidi_inChecked, setIsMidi_inChecked] = useState(false);

  const [midi_out, setMidi_out] = useState<string>('');
  const [isMidi_outChecked, setIsMidi_outChecked] = useState(false);

  const [usb, setUsb] = useState<string>('');
  const [isUsbChecked, setIsUsbChecked] = useState(
    gear && gear.connections[4] ? true : false
  );

  useEffect(() => {
    if (gear) {
      setIsOutputChecked(gear.connections[0] ? true : false);
      setIsInputChecked(gear.connections[1] ? true : false);
      setIsMidi_inChecked(gear.connections[2] ? true : false);
      setIsMidi_outChecked(gear.connections[3] ? true : false);
      setIsUsbChecked(gear.connections[4] ? true : false);
    }
  }, [gear]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const connections = [
      isOutputChecked ? { channel: output, connection: 'Output to' } : '',
      isInputChecked ? { channel: input, connection: 'Input from' } : '',
      isMidi_inChecked ? { channel: midi_in, connection: 'MIDI In from' } : '',
      isMidi_outChecked
        ? { channel: midi_out, connection: 'MIDI Out from' }
        : '',
      isUsbChecked ? { channel: usb, connection: 'USB Port' } : '',
    ];

    const editGear = {
      iconType: selectedGear,
      connections: connections.filter((connection) => connection),
    };

    const response = await fetch(`/api/gear/${name}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(editGear),
    });
    await response.json();
    history.push('/');
  }

  return (
    <div className={style.pageContainer}>
      <Header withBackButton text="Edit" />

      <main className={style.main}>
        {!isLoading && gear && (
          <>
            <GearSelector
              selected={selectedGear ? gear?.iconType : ''}
              onChange={setSelectedGear}
            />
            <form onSubmit={(event) => handleSubmit(event)}>
              <GearInput
                type="text"
                placeholder={
                  gear && gear ? gear?.connections[0].channel : 'Output to'
                }
                value={output}
                onChange={setOutput}
                onClick={() => setIsOutputChecked(!isOutputChecked)}
                checked={isOutputChecked}
              />
              <GearInput
                type="text"
                placeholder={
                  gear && gear?.connections[1]
                    ? gear?.connections[1].channel
                    : 'Input from'
                }
                value={input}
                onChange={setInput}
                onClick={() => setIsInputChecked(!isInputChecked)}
                checked={isInputChecked}
              />
              <GearInput
                type="text"
                placeholder={
                  gear && gear?.connections[2]
                    ? gear?.connections[2].channel
                    : 'MIDI In from'
                }
                value={midi_in}
                onChange={setMidi_in}
                onClick={() => setIsMidi_inChecked(!isMidi_inChecked)}
                checked={isMidi_inChecked}
              />
              <GearInput
                type="text"
                placeholder={
                  gear && gear?.connections[3]
                    ? gear?.connections[3].channel
                    : 'MIDI Out to'
                }
                value={midi_out}
                onChange={setMidi_out}
                onClick={() => setIsMidi_outChecked(!isMidi_outChecked)}
                checked={isMidi_outChecked}
              />
              <GearInput
                type="text"
                placeholder={
                  gear && gear?.connections[4]
                    ? gear?.connections[4].channel
                    : 'USB Port'
                }
                value={usb}
                onChange={setUsb}
                onClick={() => setIsUsbChecked(!isUsbChecked)}
                checked={isUsbChecked}
              />
              <SaveButton text="Save" type="submit" />
            </form>
          </>
        )}
      </main>
    </div>
  );
}
