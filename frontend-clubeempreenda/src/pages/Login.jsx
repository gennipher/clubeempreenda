import React, {useState} from 'react';
import { Form, Button } from "react-bootstrap";

import styles from "../styles/Login.module.scss";

export default function Login() {

          const [email, setEmail] = useState('');
          const [senha, setSenha] = useState('');

          return (
                    <div>
                              <Form className={styles.form}>
                                        <Form.Group>
                                                  <Form.Label className={styles.title}>Faça Login</Form.Label>
                                                  <hr style={{ 
                                                            "color": "#69ABBA", 
                                                            "backgroundColor": "#69ABBA", 
                                                            "height": 5, 
                                                            "marginLeft": -100,
                                                            "marginBottom": 30
                                                            }} 
                                                  />
                                        </Form.Group>
                                        <div className={styles.formHorizontal}>
                                                  <div className={styles.alignVertical}>
                                                            <Form.Group className={styles.formGroup}>
                                                                      <Form.Label>Email*</Form.Label>
                                                                      <Form.Control 
                                                                                className={styles.formControlWidth}
                                                                                value={email} 
                                                                                onChange={e => setEmail(e.target.value)}
                                                                      ></Form.Control>
                                                            </Form.Group>
                                                            <Form.Group className={styles.formGroup}>
                                                                      <Form.Label>Senha*</Form.Label>
                                                                      <Form.Control  
                                                                                className={styles.formControlWidth}
                                                                                value={senha} 
                                                                                onChange={e => setSenha(e.target.value)}
                                                                      ></Form.Control>
                                                            </Form.Group>
                                                            
                                                            <a href='#login' className={styles.esqueciSenha}> Esqueci a senha </a>
                                                  </div>

                                        </div>
                                        <div className={styles.alignVertical}>
                                        </div>
                                        <div className={styles.alignVertical}>
                                                  <Button 
                                                            className={styles.btnColor} 
                                                            //onClick={login}
                                                  > Entrar </Button>
                                                  
                                                  <a href='#login' className={styles.textDecoration}>Registre-se! </a>
                                        </div>
                              </Form>
                              
                    </div>
          )
}