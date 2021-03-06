import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header/Header';
import GearSelector from '../../components/GearSelector/GearSelector';
import GearInput from '../../components/GearInput/GearInput';
import SaveButton from '../../components/SaveButton/SaveButton';
import NavBar from '../../components/NavBar/NavBar';
import style from './AddPage.module.css';

export default function AddPage(): JSX.Element {
  const history = useHistory();
  const [gearName, setGearName] = useState<string>('');

  const [selectedGear, setSelectedGear] = useState<'Drum' | 'Synth' | 'Effect'>(
    'Synth'
  );

  const [output, setOutput] = useState<string>('');
  const [isOutputChecked, setIsOutputChecked] = useState(false);

  function toggleOutput() {
    setIsOutputChecked(!isOutputChecked);
  }

  const [input, setInput] = useState<string>('');
  const [isInputChecked, setIsInputChecked] = useState(false);

  function toggleInput() {
    setIsInputChecked(!isInputChecked);
  }

  const [midi_in, setMidi_in] = useState<string>('');
  const [isMidi_inChecked, setIsMidi_inChecked] = useState(false);

  function toggleMidiIn() {
    setIsMidi_inChecked(!isMidi_inChecked);
  }

  const [midi_out, setMidi_out] = useState<string>('');
  const [isMidi_outChecked, setIsMidi_outChecked] = useState(false);

  function toggleMidiOut() {
    setIsMidi_outChecked(!isMidi_outChecked);
  }

  const [usb, setUsb] = useState<string>('');
  const [isUsbChecked, setIsUsbChecked] = useState(false);

  function toggleUsb() {
    setIsUsbChecked(!isUsbChecked);
  }

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

    const newGear = {
      iconType: selectedGear,
      name: gearName,
      connections: connections.filter((connection) => connection),
    };

    const response = await fetch('/api/gear', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newGear),
    });
    await response.json();
    history.push('/');
  }

  return (
    <div className={style.pageContainer}>
      <Header
        withInputBar
        text="Add"
        type="add"
        className={style.header}
        value={gearName}
        onChange={setGearName}
      />
      <main className={style.main}>
        <GearSelector selected={selectedGear} onChange={setSelectedGear} />
        <form onSubmit={(event) => handleSubmit(event)}>
          <GearInput
            type="text"
            placeholder="Output to"
            value={output}
            onChange={setOutput}
            onClick={toggleOutput}
            checked={isOutputChecked}
          />
          <GearInput
            type="text"
            placeholder="Input from"
            value={input}
            onChange={setInput}
            onClick={toggleInput}
            checked={isInputChecked}
          />
          <GearInput
            type="text"
            placeholder="MIDI In from"
            value={midi_in}
            onChange={setMidi_in}
            onClick={toggleMidiIn}
            checked={isMidi_inChecked}
          />

          <GearInput
            type="text"
            placeholder="MIDI Out to"
            value={midi_out}
            onChange={setMidi_out}
            onClick={toggleMidiOut}
            checked={isMidi_outChecked}
          />
          <GearInput
            type="text"
            placeholder="USB Port"
            value={usb}
            onChange={setUsb}
            onClick={toggleUsb}
            checked={isUsbChecked}
          />
          <SaveButton text="Save" type="submit" />
        </form>
      </main>
      <nav>
        <NavBar selected="Add" />
      </nav>
    </div>
  );
}
