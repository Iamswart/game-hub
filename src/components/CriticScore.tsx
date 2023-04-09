import { Badge } from '@chakra-ui/react';
import React from 'react'

interface Props {
    score: number;
}

const CriticScore = ( { score }: Props) => {
let color = score > 75 ? 'green' : score > 65 ? 'yellow' : '';

  return (
    <Badge colorScheme={color} fontSize='12px' paddingX={2} borderRadius='4px'>{score}</Badge>
  )
}

export default CriticScore