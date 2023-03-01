import { Flex, Button, Text, Image } from "@chakra-ui/react";
import svg from "../../assets";
import AptForm from "../AppointmentForm/AptForm";

const ProfileButtons = ({
  onToggleForm,
  onToggleHistory,
  onClose,
  lawyerData,
  lawfirmIndex,
  lawyerIndex,
  toggleForm,
}) => {
  return (
    <Flex direction="column" gap="0.5rem" align="end">
      <Button size="sm" variant="secondary" onClick={() => onToggleHistory()}>
        Appointment History
      </Button>

      {lawyerData.slot_counter.length !== 0 ? (
        <Button onClick={() => onToggleForm()}>Book Appointment</Button>
      ) : (
        <Button bg="rust" variant="signup">
          Appointments not available
        </Button>
      )}

      {toggleForm ? (
        <AptForm
          onClose={onClose}
          lawyerIndex={lawyerIndex}
          lawfirmIndex={lawfirmIndex}
        />
      ) : (
        ""
      )}
      <Flex align="end" pr="1rem" gap="0.8rem">
        <Text size="md" fontWeight="semibold" color="grey200">
          60 min.
        </Text>
        <Image src={svg.hourglass} boxSize="50px" />
        <Text size="md" fontWeight="semibold">
          ₹{lawyerData.price}/
        </Text>
      </Flex>
    </Flex>
  );
};

export default ProfileButtons;
