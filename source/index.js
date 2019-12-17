import React from 'react';
import { render, Artboard, Text } from 'react-sketchapp';

const Document = () => {
  return (
    <Artboard
      name="Starter"
      style={{
        flexDirection: 'column',
        width: 750,
        height: 1334,
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Text
        style={{
          fontFamily: 'Arial',
          color: '#fff',
          fontWeight: 'bold'
        }}
      >
        Welcome to
      </Text>
      <Text
        style={{
          fontFamily: 'Arial',
          color: '#fff',
          fontWeight: 'bold'
        }}
      >
        Hey Latanya
      </Text>
    </Artboard>
  );
};

render(<Document />, context.document.currentPage());
