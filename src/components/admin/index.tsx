import AdminTrendingPodcasts from "@components/admin/podcasts/TrendingPodcasts";
import User from "@components/admin/sidebar/User";
import Sidebar from "@components/admin/sidebar/Sidebar";
import SidebarLayout from "@components/admin/layouts/SidebarLayout";
import SideBrand from "@components/admin/sidebar/SideBrand";
import SidebarUrl from "@components/admin/sidebar/SidebarUrl";
import SidebarUrls from "@components/admin/sidebar/SidebarUrls";
import PodcastCard from "@components/admin/podcasts/PodcastCard";
import AdminPodcastList from "@components/admin/podcasts/AdminPodcastList";
import AdminNavBar from "@components/admin/navbar/AdminNavBar";
import AdminNavLink from "@components/admin/navbar/AdminNavLink";
import AdminNavLinks from "@components/admin/navbar/AdminNavLinks";
import PodcastForm from "@components/admin/podcasts/PodcastForm";
import SelectHosts from "@components/admin/podcasts/SelectHosts";
import StaffSelect from "@components/admin/staff/StaffSelect";
import GuestSelect from "@components/admin/guests/GuestSelect";
import GuestForm from "@components/admin/guests/GuestForm";
import SelectGuests from "@components/admin/guests/SelectGuests";
import GuestOption from "@components/admin/guests/GuestOption";
import PostForm from "@components/admin/blog/PostForm";
import ManagePost from "@components/admin/blog/ManagePost";
import ManagePosts from "@components/admin/blog/ManagePosts";
import ManagePodcast from "@components/admin/podcasts/ManagePodcast";
import ManagePodcasts from "@components/admin/podcasts/ManagePodcasts";
import ProfileForm from "@components/admin/profile/ProfileForm";

/********************* Stafff **************************/
import StaffCard from "@components/admin/staff/StaffCard";
import StaffList from "@components/admin/staff/StaffList";
import StaffPermissionForm from "@components/admin/staff/StaffPermissionForm";
import StaffPermissionGroup from "@components/admin/staff/StaffPermissionGroup";
import NewStaff from "@components/admin/staff/NewStaff";


/****************** Opportunities **********************/
import OpportunityList from "@components/admin/opportunities/OpportunityList";
import OpportunityCard from "@components/admin/opportunities/OpportunityCard";
import OpportunityForm from "@components/admin/opportunities/OpportunityForm";
import OpportunitiesListFilter from "@components/admin/opportunities/OpportunitiesListFilter";

/*********************** Tags *************************/
import TagForm from "@components/admin/tag/TagForm";

export {
    GuestForm, User, Sidebar, SideBrand, SidebarUrl, PodcastCard, AdminNavBar,
    SelectHosts, StaffSelect, SidebarUrls, GuestSelect, GuestOption, PostForm,
    ProfileForm, ManagePost, ManagePosts, SelectGuests, ManagePodcasts,
    ManagePodcast, AdminNavLink, AdminNavLinks, SidebarLayout, PodcastForm,
    AdminPodcastList, AdminTrendingPodcasts,

/*** Staff ***/
    StaffCard, StaffList, StaffPermissionForm, StaffPermissionGroup, NewStaff,

/*** Opportunities ***/
    OpportunityList, OpportunityCard, OpportunityForm, OpportunitiesListFilter,
/*** Tag ***/
  TagForm,
};
