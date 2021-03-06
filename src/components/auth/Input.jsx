import React from "react";
import { TextField, Grid, InputAdornment, IconButton } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
const Input = ({
    name,
    half,
    handleChange,
    label,
    autoFocus,
    handleShowPassword,
    type,
}) => {
    return (
        <Grid sm={half ? 6 : 12} item xs={12}>
            <TextField
                name={name}
                onBlur={handleChange}
                variant="outlined"
                required
                type={type}
                aria-required
                fullWidth
                label={label}
                autoFocus={autoFocus}
                InputProps={
                    name === "password"
                        ? {
                              endAdornment: (
                                  <InputAdornment position="end">
                                      <IconButton onClick={handleShowPassword}>
                                          {type === "password" ? (
                                              <Visibility />
                                          ) : (
                                              <VisibilityOff />
                                          )}
                                      </IconButton>
                                  </InputAdornment>
                              ),
                          }
                        : null
                }
            />
        </Grid>
    );
};

export default Input;
