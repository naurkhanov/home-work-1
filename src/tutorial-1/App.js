import ProfileFunc from './ProfileFunc';
import ProfileClass from './ProfileClass';

const App = () => {
  return (
    <div className="App">
      <ProfileFunc name="Вася Пупкин" registeredAt={new Date(2021, 5, 22)} />
      <ProfileClass name="Вася Пупкин" registeredAt={new Date(2021, 5, 22)} />
    </div>
  );
};

export default App;
