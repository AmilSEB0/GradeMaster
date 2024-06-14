export declare class Utilisateur {
    id: number;
    nom: string;
    prenom: string;
    email: string;
    motDePasse: string;
    role: number;
    getNom(): string;
    setNom(nom: string): void;
    getPrenom(): string;
    setPrenom(prenom: string): void;
    getEmail(): string;
    setEmail(email: string): void;
    getMotDePasse(): string;
    setMotDePasse(motDePasse: string): void;
    getRole(): number;
    setRole(role: number): void;
}
