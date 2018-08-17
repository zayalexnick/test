import * as React from 'react';
import { Container, Input, Button } from '../../styles/Add.styles.web';
import { PropsInterface } from "./Form.interfaces";

const Form: React.SFC<PropsInterface> = ({ parent }): JSX.Element => (
    <Container>
        <Input value={parent.title} onChange={(e) => parent.title = e.target.value} />
        <Input value={parent.description} onChange={(e) => parent.description = e.target.value} />
        <Input value={parent.date} onChange={(e) => parent.date = e.target.value} />
        <Input value={parent.location} onChange={(e) => parent.location = e.target.value} />
        <Input value={parent.price.toString()} onChange={(e) => parent.price = parseInt(e.target.value === '' ? '0' : e.target.value)} />
        <Button onClick={() => {}}>Добавить</Button>
    </Container>
);

export default Form;