import { Button } from '@components/Button';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Input } from '@components/Input';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Container, Content, Icon } from './style';

export function NewGroup() {
  const navigation = useNavigation();
  const [group, setGroup] = useState('');

  function handleNew() {
    navigation.navigate('players', { group })
  }

  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />


        <Highlight
          title="Nova turma"
          subtitle="Crie a turma para adicionar pessoas"
        />
        <Input
          placeholder='Nome da turma'
          onChangeText={setGroup}
        />

        <Button
          title="Criar"
          onPress={handleNew}
        />

      </Content>
    </Container>
  )
}