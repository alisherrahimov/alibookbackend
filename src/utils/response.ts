export class Response {
  status: number;
  message: string;
  data: any;
  time: Date = new Date();

  constructor(status: number, data: any, message?: string, time?: Date) {
    this.status = status;
    this.message = message || (status === 200 ? 'Success' : 'Error');
    this.data = data;
    this.time = time || new Date();
  }

  static success(data: any, message?: string) {
    return new Response(200, data, message);
  }

  static error(data: any, message?: string) {
    return new Response(400, data, message);
  }
}

// {
//     "status": 200,
//     "message": "Success",
//     "data": {
//         "phone": 1234567890
//     }
//     }

//     {
//     "status": 400,
//     "message": "Error",
//     "data": {
//         "phone": 1234567890
//     }
// }
