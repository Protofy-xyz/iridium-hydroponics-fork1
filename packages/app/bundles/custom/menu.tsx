import { clearSession } from 'protolib'

const logout = (setSession, setSessionContext) => {
    clearSession(setSession, setSessionContext)
}

export default [
    { label: "Profile", path: "/profile", visibility: session => session.loggedIn },
    {
        label: (workspace, session) => workspace.label,
        path: (workspace, session) => workspace.default,
        visibility: (session, workspace) => session.loggedIn && workspace && workspace.default,
        id: 'pop-over-workspace-link'
    },
    {
        label: (workspace, session) => workspace.adminLabel,
        path: (workspace, session) => workspace.adminDefault,
        visibility: (session, workspace) => session.loggedIn && workspace && workspace.adminDefault,
        id: 'pop-over-admin-link'
    },
    { label: "Login", path: "/auth/login", visibility: session => !session.loggedIn },
    { label: "Logout", path: "/", visibility: session => session.loggedIn, onClick: logout },

]
