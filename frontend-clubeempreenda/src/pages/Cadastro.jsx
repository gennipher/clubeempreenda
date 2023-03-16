import React, {useState} from 'react';
import { Form, Button } from "react-bootstrap";

import styles from "../styles/Cadastro.module.scss";

export default function Cadastro() {

          const [email, setEmail] = useState('');
          const [senha, setSenha] = useState('');

          return (
                    <div>
                              <Form className={styles.form}>
                                        <Form.Group>
                                                  <Form.Label className={styles.title}>Entre para o Club!</Form.Label>
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
                                                                                type="email"
                                                                                required
                                                                                value={email} 
                                                                                onChange={e => setEmail(e.target.value)}
                                                                      ></Form.Control>
                                                            </Form.Group>
                                                            <Form.Group className={styles.formGroup}>
                                                                      <Form.Label>Senha*</Form.Label>
                                                                      <Form.Control
                                                                                type="password"
                                                                                required
                                                                                className={styles.formControlWidth}
                                                                                value={senha} 
                                                                                onChange={e => setSenha(e.target.value)}
                                                                      ></Form.Control>
                                                            </Form.Group>
                                                            
                                                  </div>

                                        </div>
                                        <div className={styles.alignHorizontal}>
                                                  <p style={{"paddingLeft": 10,}}>*VIP: Clube de vantagens do Club Empreenda. Nele você recebe consultorias gratuitas dos nossos parceiros para crescer ainda mais seu negócio. <a href='#sejavip'>Saiba mais!</a></p>
                                        </div>
                                        <div className={styles.alignHorizontal}>
                                                  <p style={{"paddingLeft": 10,}}><a href='#termosepoliticas'>Acesse os termos de uso</a></p>
                                        </div>
                                        <div className={styles.alignVertical}>
                                                  <Button 
                                                            className={styles.btnColor} 
                                                            type="submit"
                                                  > Cadastrar </Button>
                                                  
                                                  <a href='#login' className={styles.textDecoration}> Já possui conta? Entre! </a>
                                        </div>
                              </Form>
                              
                    </div>
          )
}