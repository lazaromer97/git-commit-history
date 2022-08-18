import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}

  async getCommitHistory() {
    const result = await this.httpService
      .get(
        'https://api.github.com/repos/lazaromer97/git-commit-history/commits',
      )
      .toPromise();
    return result.data || [];
  }
}
