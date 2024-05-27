import { CreateUserInput } from './create-user.input';
import { InputType, Field, Int, PartialType, OmitType } from '@nestjs/graphql';

@InputType()
export class UpdateUserInput extends PartialType(
  OmitType(CreateUserInput, ['email', 'password'] as const),
) {
  @Field(() => Int)
  id: number;
}
