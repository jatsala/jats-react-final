import { render } from "@testing-library/react";
import TaskList from "./TaskList";
import React from 'react';


// 0- Renderiza el componente
it('0- Renderiza el componente', () => {
    const r = render(<TaskList></TaskList>);
    expect(r).toBeDefined()
});
