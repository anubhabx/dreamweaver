declare type CreateUserParams = {
  clerkId: string;
  email: string;
  username: string | null;
  avatar: string | null;
};

declare type UpdateUserParams = {
  username: string | null;
  avatar: string | null;
};
