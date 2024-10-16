import React, { createContext, useState, ReactNode, useContext } from "react";

export type Role = "admin" | "user";

interface AuthContextType {
  isAuthenticated: boolean;
  role: Role | null;
  login: (role: Role) => void;
  logout: () => void;
  token: string | null;
}
type AuthProviderProps = { children: ReactNode };

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [role, setRole] = useState<Role | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const generateMockToken = (role: Role): string => {
    const header = { alg: "HS256", typ: "JWT" };
    const payload = { role, exp: Date.now() + 60 * 60 * 1000 }; // Token con 1 hora de validez
    const headerBase64 = btoa(JSON.stringify(header));
    const payloadBase64 = btoa(JSON.stringify(payload));
    const signature = btoa("mock-signature");
    return `${headerBase64}.${payloadBase64}.${signature}`;
  };

  const login = (role: Role) => {
    setIsAuthenticated(true);
    setRole(role);
    const token = generateMockToken(role);
    setToken(token);
    localStorage.setItem("token", token);
  };
  const logout = () => {
    setIsAuthenticated(false);
    setRole(null);
    setToken(null);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, role, login, logout, token }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
