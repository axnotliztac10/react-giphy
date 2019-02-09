import React from 'react';
import { Card as RebassCard } from 'rebass';

export default function Card(props) {
  return (
    <RebassCard
      boxShadow="0 2px 16px rgba(0, 0, 0, 0.25)"
      borderRadius={8}
      bg="#fff"
      {...props}
    >{props.children}</RebassCard>
  );
}
