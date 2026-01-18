declare module 'h3' {
  interface H3EventContext {
    contributor: Contributor
    canUnlockNuxterBadge: boolean
    canUnlockSoundsterBadge: boolean
    canUnlockUIProBadge: boolean
    nuxterRoleAdded: boolean
    soundsterRoleAdded: boolean
    maintainerRoleAdded: boolean;
  }
}

export {}
