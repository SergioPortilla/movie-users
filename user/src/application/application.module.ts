import { DatabaseModule } from './../infrastructure/adapter/repository/db/database.module';
import { Module } from '@nestjs/common';
import { SearchUserService } from './caseuse/searchUser.service';
import { UpdateUserService } from './caseuse/updateuser.service';
import { userProviders } from './providers/user';

@Module({
    imports: [
        DatabaseModule
    ],
    controllers: [],
    providers: [
        SearchUserService,
        UpdateUserService,
        ...userProviders
    ],
    exports: [ 
        SearchUserService,
        UpdateUserService,
        ...userProviders
    ]
})
export class ApplicationModule {}
