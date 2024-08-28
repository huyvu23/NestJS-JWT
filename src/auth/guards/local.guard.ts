import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Observable } from 'rxjs';

// context: ExecutionContext là đối tượng chứa thông tin về ngữ cảnh của yêu cầu hiện tại (ví dụ: request, response, route handler).

// Phương thức này trả về một giá trị boolean (true hoặc false), hoặc một Promise<boolean>, hoặc một Observable<boolean>. Nếu kết quả là true, request sẽ được tiếp tục xử lý, nếu là false, request sẽ bị từ chối.

// super.canActivate(context) gọi phương thức canActivate của class cha (AuthGuard). Điều này có nghĩa là LocalGuard không thay đổi logic của việc xác thực mà hoàn toàn dựa vào logic của AuthGuard('local').
@Injectable()
export class LocalGuard extends AuthGuard('local') {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    console.log('run local one');
    return super.canActivate(context);
  }
}
