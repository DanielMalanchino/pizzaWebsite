import React from 'react';
import { FeatureContainer, FeatureButton } from './FeatureElements';

const Feature = () => {
    return (
        <FeatureContainer>
            <h1>Pizza do dia</h1>
            <p>Preparada com a deliciosa combinação de ingredientes como ervilha, azeitona, molho de tomate, cebola, ovos, queijo, linguiça calabresa e orégano</p>
            <FeatureButton>Peça agora</FeatureButton>
        </FeatureContainer>
    )
}

export default Feature;