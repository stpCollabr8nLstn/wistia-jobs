import IconHeartBeat from "./components/icons/icon-heart-beat";
import IconSnacks from "./components/icons/icon-snacks";
import IconDollar from "./components/icons/icon-dollar";
import IconSun from "./components/icons/icon-sun";
import IconDogHead from "./components/icons/icon-dog-head";
import IconPiggyBank from "./components/icons/icon-piggy-bank";
import IconOpenBook from "./components/icons/icon-open-book";
import IconBirdies from "./components/icons/icon-birdies";
import IconBus from "./components/icons/icon-bus";
import IconInsurance from "./components/icons/icon-insurance";

const perksData = [
  {
    color: "PINK_DARK",
    name: "heartBeat",
    icon: <IconHeartBeat />,
    title: "Life + long term disability insurance",
    copy:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel dignissim nulla. Curabitur nulla risus, scelerisque vitae fringilla ut, ultricies quis augue. Sed quis porta arcu. Vestibulum molestie nunc vel ipsum malesuada dapibus. Phasellus fringilla eget erat sit amet rutrum. Aenean sit amet diam eros. Cras ex leo, accumsan tempor ex in, eleifend cursus tellus. Duis non metus quis ex vehicula porta. Nunc a facilisis enim, nec tristique tellus."
  },
  {
    color: "BLUE",
    name: "snacks",
    icon: <IconSnacks />,
    title: "Healthy (and non-healthy!) snacks and beverages",
    copy:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel dignissim nulla. Curabitur nulla risus, scelerisque vitae fringilla ut, ultricies quis augue. Sed quis porta arcu. Vestibulum molestie nunc vel ipsum malesuada dapibus. Phasellus fringilla eget erat sit amet rutrum. Aenean sit amet diam eros. Cras ex leo, accumsan tempor ex in, eleifend cursus tellus. Duis non metus quis ex vehicula porta. Nunc a facilisis enim, nec tristique tellus."
  },
  {
    color: "GREEN_DARK",
    name: "dollar",
    icon: <IconDollar />,
    title: "Competitive salary + profit sharing",
    copy:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel dignissim nulla. Curabitur nulla risus, scelerisque vitae fringilla ut, ultricies quis augue. Sed quis porta arcu. Vestibulum molestie nunc vel ipsum malesuada dapibus. Phasellus fringilla eget erat sit amet rutrum. Aenean sit amet diam eros. Cras ex leo, accumsan tempor ex in, eleifend cursus tellus. Duis non metus quis ex vehicula porta. Nunc a facilisis enim, nec tristique tellus."
  },
  {
    color: "YELLOW_DARK",
    name: "sun",
    icon: <IconSun />,
    title: "Flexible vacation policy",
    copy:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel dignissim nulla. Curabitur nulla risus, scelerisque vitae fringilla ut, ultricies quis augue. Sed quis porta arcu. Vestibulum molestie nunc vel ipsum malesuada dapibus. Phasellus fringilla eget erat sit amet rutrum. Aenean sit amet diam eros. Cras ex leo, accumsan tempor ex in, eleifend cursus tellus. Duis non metus quis ex vehicula porta. Nunc a facilisis enim, nec tristique tellus."
  },
  {
    color: "BLUE_DARK",
    name: "dogHead",
    icon: <IconDogHead />,
    title: "Lenny the Office Dog",
    copy:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel dignissim nulla. Curabitur nulla risus, scelerisque vitae fringilla ut, ultricies quis augue. Sed quis porta arcu. Vestibulum molestie nunc vel ipsum malesuada dapibus. Phasellus fringilla eget erat sit amet rutrum. Aenean sit amet diam eros. Cras ex leo, accumsan tempor ex in, eleifend cursus tellus. Duis non metus quis ex vehicula porta. Nunc a facilisis enim, nec tristique tellus."
  },
  {
    color: "PINK_DARK",
    name: "piggyBank",
    icon: <IconPiggyBank />,
    title: "401k, plus a company contribution",
    copy:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel dignissim nulla. Curabitur nulla risus, scelerisque vitae fringilla ut, ultricies quis augue. Sed quis porta arcu. Vestibulum molestie nunc vel ipsum malesuada dapibus. Phasellus fringilla eget erat sit amet rutrum. Aenean sit amet diam eros. Cras ex leo, accumsan tempor ex in, eleifend cursus tellus. Duis non metus quis ex vehicula porta. Nunc a facilisis enim, nec tristique tellus."
  },
  {
    color: "BLUE",
    name: "openBook",
    icon: <IconOpenBook />,
    title: "Personal budget for professional development",
    copy:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel dignissim nulla. Curabitur nulla risus, scelerisque vitae fringilla ut, ultricies quis augue. Sed quis porta arcu. Vestibulum molestie nunc vel ipsum malesuada dapibus. Phasellus fringilla eget erat sit amet rutrum. Aenean sit amet diam eros. Cras ex leo, accumsan tempor ex in, eleifend cursus tellus. Duis non metus quis ex vehicula porta. Nunc a facilisis enim, nec tristique tellus."
  },
  {
    color: "GREEN_DARK",
    name: "birdies",
    icon: <IconBirdies />,
    title: "Up to 12 weeks paid family leave",
    copy:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel dignissim nulla. Curabitur nulla risus, scelerisque vitae fringilla ut, ultricies quis augue. Sed quis porta arcu. Vestibulum molestie nunc vel ipsum malesuada dapibus. Phasellus fringilla eget erat sit amet rutrum. Aenean sit amet diam eros. Cras ex leo, accumsan tempor ex in, eleifend cursus tellus. Duis non metus quis ex vehicula porta. Nunc a facilisis enim, nec tristique tellus."
  },
  {
    color: "YELLOW_DARK",
    name: "bus",
    icon: <IconBus />,
    title: "Transportation subsidies for your preferred mode of transit",
    copy:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel dignissim nulla. Curabitur nulla risus, scelerisque vitae fringilla ut, ultricies quis augue. Sed quis porta arcu. Vestibulum molestie nunc vel ipsum malesuada dapibus. Phasellus fringilla eget erat sit amet rutrum. Aenean sit amet diam eros. Cras ex leo, accumsan tempor ex in, eleifend cursus tellus. Duis non metus quis ex vehicula porta. Nunc a facilisis enim, nec tristique tellus."
  },
  {
    color: "BLUE_DARK",
    name: "insurance",
    icon: <IconInsurance />,
    title: "Fully paid health + dental insurance",
    copy:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel dignissim nulla. Curabitur nulla risus, scelerisque vitae fringilla ut, ultricies quis augue. Sed quis porta arcu. Vestibulum molestie nunc vel ipsum malesuada dapibus. Phasellus fringilla eget erat sit amet rutrum. Aenean sit amet diam eros. Cras ex leo, accumsan tempor ex in, eleifend cursus tellus. Duis non metus quis ex vehicula porta. Nunc a facilisis enim, nec tristique tellus."
  }
];

export default perksData;
