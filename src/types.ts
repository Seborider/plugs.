export type Gear = {
  iconType: string;
  name: string;
  connections: [
    { channel: string; connection: string },
    { channel: string; connection: string },
    { channel: string; connection: string },
    { channel: string; connection: string },
    { channel: string; connection: string }
  ];
};
