import * as React from 'react'
import { Box, Text } from '../../ink.js'

export type ClawdPose =
  | 'default'
  | 'arms-up'
  | 'look-left'
  | 'look-right'

type Props = {
  pose?: ClawdPose
}

type WhaleArt = {
  top: string
  middle: string
  bottom: string
}

const WHALE_POSES: Record<ClawdPose, WhaleArt> = {
  default: {
    top: '   /\\_/\\      ',
    middle: '  ( o.o )  ~  ',
    bottom: '   > ^ <      ',
  },
  'look-left': {
    top: '   /\\_/\\      ',
    middle: '  (o.  )  ~  ',
    bottom: '   > ^ <      ',
  },
  'look-right': {
    top: '   /\\_/\\      ',
    middle: '  (  .o)  ~  ',
    bottom: '   > ^ <      ',
  },
  'arms-up': {
    top: '  ~/\\_/\\~     ',
    middle: '  ( ^.^ )  ~  ',
    bottom: '   > ^ <      ',
  },
}

export function Clawd({ pose = 'default' }: Props = {}): React.ReactNode {
  const art = WHALE_POSES[pose]

  return (
    <Box flexDirection="column">
      <Text color="clawd_body">{art.top}</Text>
      <Text color="clawd_body">{art.middle}</Text>
      <Text color="clawd_body">{art.bottom}</Text>
    </Box>
  )
}
