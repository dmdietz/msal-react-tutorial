import { Configuration, LogLevel } from "@azure/msal-browser";

export const msalConfig: Configuration = {
  auth: {
    clientId: "0c8759f2-101e-45cc-97bb-3ca2c9e68b07",
    authority:
      "https://login.microsoftonline.com/29082779-76f5-496c-8672-1f8544019d34",
    redirectUri: "/",
  },
  cache: {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: false,
  },
  system: {
    loggerOptions: {
      loggerCallback: (level, message, containsPii) => {
        if (containsPii) {
          return;
        }
        switch (level) {
          case LogLevel.Error:
            console.error(message);
            return;
          case LogLevel.Warning:
            console.warn(message);
            return;
          case LogLevel.Info:
            console.info(message);
            return;
          case LogLevel.Verbose:
            console.debug(message);
            return;
          default:
            return;
        }
      },
    },
  },
};

export interface ILoginRequest {
  scopes: string[];
}

export const loginRequest: ILoginRequest = {
  scopes: ["User.Read"],
};

export interface IGraphConfig {
  graphMeEndpoint: string;
}

export const graphConfig: IGraphConfig = {
  graphMeEndpoint: "https://graph.microsoft.com/v1.0/me",
};
