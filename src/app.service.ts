import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}

  async getCommitHistory() {
    const { GITHUB_PROJECT_COMMIT_HISTORY_URL } = process.env;
    const result = await this.httpService
      .get(GITHUB_PROJECT_COMMIT_HISTORY_URL)
      .toPromise();
    return result.data || [];
  }
}
