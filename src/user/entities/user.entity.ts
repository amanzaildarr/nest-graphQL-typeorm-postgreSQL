import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field()
  id: number;

  @Field(() => String)
  email: string;

  @Field(() => String)
  firstName: string;

  @Field(() => String)
  lastName: string;
  
  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field({nullable:true})
  deletedAt: Date;
}
