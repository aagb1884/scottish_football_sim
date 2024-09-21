export type Tile = {
  id?: string;
  position: [number, number];
  value: number;
  name: string;
};

export type TileMap = { [id: string]: Tile };
