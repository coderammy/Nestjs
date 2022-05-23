import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello !mere ho gyae nirale haal  jab se swware ne pakda  mera hatha ';
  }
}
