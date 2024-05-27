import { InputType, Int, Field } from '@nestjs/graphql';
import { IsEmail } from 'class-validator';

@InputType()
export class CreateUserInput {
  @Field()
  @IsEmail()
  email: string;

  @Field(() => String)
  firstName: string;

  @Field(() => String)
  lastName: string;

  @Field(() => Boolean)
  isTermsAgree: boolean;

  @Field(() => String)
  password: string;

  @Field(() => String)
  cpassword: string;

  // @Field(() => Int, { description: 'Example field (placeholder)' })
  // exampleField: number;
}
