export class Character {
  constructor(
    public char_id: number,
    public name: string,
    public birthday: string,
    public occupation: string[],
    public img: string,
    public status: string,
    public nickname: string,
    public appearence: number[],
    public portrayed: string,
    public category: string,
  ) {}
}