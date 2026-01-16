import type { Contributor, Provider, Score } from '#shared/types'

export function useSoundster() {
  const canUnlockModuleBadge = useState<boolean>(() => false)
  const canUnlockNuxterBadge = useState<boolean>(() => false)
  const canUnlockSoundsterBadge = useState<boolean>(() => false)
  const canUnlockUIProBadge = useState<boolean>(() => false)
  const contributor = useState<Contributor>('contributor')
  const detailedScore = useState<Score[]>()
  const hasHelpfulComments = useState<boolean>(() => false)
  const hasHelpfulIssues = useState<boolean>(() => false)
  const hasMergedPullRequests = useState<boolean>(() => false)
  const linked = useState<{ [key in Provider]: boolean }>(() => ({ github: false, discord: false }))

  return {
    linked,
    contributor,
    canUnlockNuxterBadge,
    canUnlockModuleBadge,
    canUnlockUIProBadge,
    hasMergedPullRequests,
    hasHelpfulIssues,
    hasHelpfulComments,
    detailedScore,
    canUnlockSoundsterBadge,
  }
}
