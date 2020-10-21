import React from 'react'
import { Icon } from 'semantic-ui-react';

export default function Header() {
    return (
        <div style={{backgroundColor: '#333', color: '#fff', padding: '20px'}}>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '10px auto'}}> 
                <Icon name='car' size='big' />
                <h1 style={{margin: '0'}}>pavara.lt</h1>
            </div>
            <p style={{textAlign: 'center'}}>Tavo automobilio profilis</p>
        </div>
    )
}
