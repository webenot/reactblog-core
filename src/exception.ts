export class Exception {
  constructor (public message: string, public code: number = 500, public errors?: any) {

  }
}
