
import ProfileFunc from './ProfileFunc';

const App = () => {
  return (
    <div className="App">
      <ProfileFunc name="Вася Пупкин" registeredAt={new Date(2021, 5, 22)} />
    </div>
  );
};

export default App;
