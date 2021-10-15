type ID = string

export interface FileInfo {}

export interface FolderInfo {}

export interface User {
    id: ID
    email: string
    password: string
    name: string
    services?: {
        facebook: string,
        google: string,
    }
    role: 'user' | 'admin'
    lastName: string
    isOnline: boolean
    lastLogin: Date
    picture: string
}
