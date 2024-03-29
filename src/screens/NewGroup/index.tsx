import { Button } from '@components/Button';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Input } from '@components/Input';
import { useNavigation } from '@react-navigation/native';
import { groupCreate } from '@storage/group/groupCreate';
import { useState } from 'react';
import { Container, Content, Icon } from './style';

export function NewGroup() {
  const navigation = useNavigation();
  const [group, setGroup] = useState('');

  async function handleNew() {
    try {
      await groupCreate(group);
      navigation.navigate('players', { group })
    } catch (error) {
      console.log(error)
    }

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