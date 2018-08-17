declare module 'gl-auth-bridge' {
    type BridgeResponse = {
        accessToken?: string,
        code?: number,
        message?: string
    }

    export default class RNGLAuth {
        getToken(): Promise<BridgeResponse>;
        refreshToken(): Promise<BridgeResponse>;
        showAccountsListView(): Promise<BridgeResponse>;
        getCurrentAccount(): Promise<BridgeResponse>;
        removeCurrentAccount(): Promise<BridgeResponse>;
        migrate(): Promise<BridgeResponse>;
        migrationIsNeeded(): Promise<BridgeResponse>;
        onCurrentAccountDeleted(): void;
        onCurrentAccountLogout(): void;
        onCurrentAccountChange(): void;
    }
}