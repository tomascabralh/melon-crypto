import React from "react";
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Button,
  Input,
} from "@chakra-ui/react";

const PasswordResetPage = () => {
  const [newPassword, setNewPassword] = useState(null);
  const [newPasswordConfirm, setNewPasswordConfirm] = useState(null);
  return (
    <>
      <FormControl>
        <FormLabel htmlFor="Password">New Password</FormLabel>
        <Input
          ref={passwordRef}
          id="Password"
          type="Password"
          isRequired
          mb={3}
          onChange={(e) => {
            setNewPassword(e.target.value);
          }}
        />
        <FormHelperText my={1} mb={2}>
          Passwords must be at least 6 characters.
        </FormHelperText>
        <FormLabel htmlFor="ConfirmPassword">Confirm New Password</FormLabel>
        <Input
          ref={passwordConfirmRef}
          id="ConfirmNewPassword"
          type="Password"
          isRequired
          mb={3}
          onChange={(e) => {
            setNewPasswordConfirm(e.target.value);
          }}
        />
        {!isError ? (
          <FormHelperText>Passwords do not match!</FormHelperText>
        ) : null}
      </FormControl>
    </>
  );
};

export default PasswordResetPage;
