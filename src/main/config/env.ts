export class Environment {
  starwarsUrl: string

  constructor() {
    this.starwarsUrl = process.env.STARWARS_URL ?? ''
  }
}
