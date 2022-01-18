import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from './components/Card';
import { Header } from './components/Header';

export function App() {
    let Headers = Header()
    let Cards = Card()
    let HomePage = `
        ${Headers}
        ${Cards}
    `
    return HomePage
}