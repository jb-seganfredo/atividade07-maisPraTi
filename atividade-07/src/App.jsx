import './App.css'
import SimpleCounter from './components/SimpleCounter'
import BackgroundChanger from './components/BackgroundChanger'
import ChoresList from './components/ChoresList'
import Timer from './components/Timer'
import ListFilter from './components/ListFilter'

export default function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>

      <SimpleCounter />
      <BackgroundChanger />
      <ChoresList />
      <Timer />
      <ListFilter />
  </>
  )
}
