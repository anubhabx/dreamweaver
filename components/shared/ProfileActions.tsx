"use client";

import { UserButton, useUser } from "@clerk/nextjs";
import React from "react";
import BorderMagicButton from "./BorderMagicButton";

const ProfileActions = () => {
  const { user } = useUser();

  return (
    <>
      {user ? (
        <UserButton />
      ) : (
        <div className="border rounded-full">
          <BorderMagicButton title="Create an account" route="/sign-in" />
        </div>
      )}
    </>
  );
};

export default ProfileActions;
