import React from 'react';

import {
  FormatPainterFilled,
  ThunderboltFilled,
  DollarCircleFilled,
  SlidersFilled,
  EyeFilled,
  ApiFilled,
} from '@ant-design/icons';

import {
  FeaturesContainer,
  FeaturesTitle,
  FeaturesGrid,
  Feature,
  FeatureTitle,
  FeatureDescription,
} from './styles';

function Features() {
  const FeatureData = [
    {
      id: 0,
      icon: <FormatPainterFilled />,
      title: `Personalizable`,
      description: `  Podés subir una imagen de portada para dar a tu curso una identidad
            única.`,
    },
    {
      id: 1,
      icon: <ThunderboltFilled />,
      title: `Contenido rápido`,
      description: `El contenido se actualiza en un abrir y cerrar de ojos.`,
    },
    {
      id: 2,
      icon: <DollarCircleFilled />,
      title: `Económico`,
      description: `Sin subscripciones. Paga una única vez y tené acceso completo.`,
    },
    {
      id: 3,
      icon: <SlidersFilled />,
      title: `Flexible`,
      description: `Adaptable a cualquier rubro, sin limitaciones.`,
    },
    {
      id: 4,
      icon: <EyeFilled />,
      title: `Progreso de los usuarios`,
      description: `Revisa el progreso de los usuarios en el curso y su calificación final.`,
    },
    {
      id: 4,
      icon: <ApiFilled />,
      title: `Acceso a API del curso`,
      description: `Podes recuperar los datos de tu curso a traves de la API integrada y utilizarlos donde quieras.`,
    },
  ];

  return (
    <FeaturesContainer id="features">
      <FeaturesTitle>Características principales</FeaturesTitle>
      <FeaturesGrid>
        {FeatureData.map(f => (
          <Feature key={f.id}>
            {f.icon}
            <FeatureTitle>{f.title}</FeatureTitle>
            <FeatureDescription>{f.description}</FeatureDescription>
          </Feature>
        ))}
      </FeaturesGrid>
    </FeaturesContainer>
  );
}

export default Features;
