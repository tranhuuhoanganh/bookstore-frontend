    import { UserModel } from "../../../Models/UserModel";

    type Props = {
        user: UserModel;
    };

    function UserCard({ user }: Props) {

        return (
            <div>
                <h3>{user.hoDem}{user.ten}</h3>
                <p>{user.email}</p>
            </div>
        );
    }

    export default UserCard;