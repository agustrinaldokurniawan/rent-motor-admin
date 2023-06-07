export default class Motors {
  async getMotors() {
    const motors = import('../dummy/motors.json')
    return motors
  }
}