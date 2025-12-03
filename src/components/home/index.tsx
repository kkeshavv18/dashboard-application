import {
  Users,
  UserCheck,
  ShieldCheck,
  Activity,
  TrendingUp,
  MapPin,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { users } from "@/data/users";

const HomeComponent = () => {
  // Calculate statistics from users data
  const totalUsers = users.length;
  const adminUsers = users.filter((user) => user.role === "admin").length;
  const moderatorUsers = users.filter(
    (user) => user.role === "moderator"
  ).length;
  const averageAge = Math.round(
    users.reduce((sum, user) => sum + user.age, 0) / users.length
  );

  // Gender distribution
  const maleCount = users.filter((user) => user.gender === "male").length;
  const femaleCount = users.filter((user) => user.gender === "female").length;
  const malePercentage = Math.round((maleCount / totalUsers) * 100);
  const femalePercentage = Math.round((femaleCount / totalUsers) * 100);

  // Top departments
  const departmentCounts = users.reduce((acc, user) => {
    const dept = user.company.department;
    acc[dept] = (acc[dept] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const topDepartments = Object.entries(departmentCounts)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 5);

  // Top states
  const stateCounts = users.reduce((acc, user) => {
    const state = user.address.state;
    acc[state] = (acc[state] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const topStates = Object.entries(stateCounts)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 5);

  // Recent users (last 5)
  const recentUsers = users.slice(-5).reverse();

  return (
    <div className="container mx-auto p-6 space-y-6">
      {/* Page Header */}
      <div className="space-y-1">
        <h1 className="text-3xl font-bold tracking-tight">
          Dashboard Overview
        </h1>
        <p className="text-muted-foreground">
          Welcome back! Here's a summary of your user base and activity.
        </p>
      </div>

      {/* Stats Cards Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {/* Total Users Card */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalUsers}</div>
            <p className="text-xs text-muted-foreground mt-1">
              Active registered users
            </p>
          </CardContent>
        </Card>

        {/* Admin Users Card */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Administrators
            </CardTitle>
            <ShieldCheck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{adminUsers}</div>
            <p className="text-xs text-muted-foreground mt-1">
              {Math.round((adminUsers / totalUsers) * 100)}% of total users
            </p>
          </CardContent>
        </Card>

        {/* Moderators Card */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Moderators</CardTitle>
            <UserCheck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{moderatorUsers}</div>
            <p className="text-xs text-muted-foreground mt-1">
              {Math.round((moderatorUsers / totalUsers) * 100)}% of total users
            </p>
          </CardContent>
        </Card>

        {/* Average Age Card */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Age</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{averageAge} years</div>
            <p className="text-xs text-muted-foreground mt-1">
              Across all users
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        {/* Recent Users Card */}
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Recent Users</CardTitle>
            <CardDescription>
              Latest registered users in the system
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentUsers.map((user) => (
                <div
                  key={user.id}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={user.image} alt={user.firstName} />
                      <AvatarFallback>
                        {user.firstName[0]}
                        {user.lastName[0]}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">
                        {user.firstName} {user.lastName}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {user.email}
                      </p>
                    </div>
                  </div>
                  <Badge
                    variant={user.role === "admin" ? "default" : "secondary"}
                  >
                    {user.role}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Demographics Card */}
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>User Demographics</CardTitle>
            <CardDescription>Gender distribution overview</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium">Male</span>
                <span className="text-muted-foreground">{maleCount} users</span>
              </div>
              <Progress value={malePercentage} className="h-2" />
              <p className="text-xs text-muted-foreground">{malePercentage}%</p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium">Female</span>
                <span className="text-muted-foreground">
                  {femaleCount} users
                </span>
              </div>
              <Progress value={femalePercentage} className="h-2" />
              <p className="text-xs text-muted-foreground">
                {femalePercentage}%
              </p>
            </div>

            <div className="pt-4 border-t">
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="font-medium">Role Distribution</span>
              </div>
              <div className="flex gap-2">
                <Badge variant="default" className="flex-1 justify-center">
                  Admin: {adminUsers}
                </Badge>
                <Badge variant="secondary" className="flex-1 justify-center">
                  Mod: {moderatorUsers}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Grid */}
      <div className="grid gap-4 md:grid-cols-2">
        {/* Top Departments Card */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Top Departments
            </CardTitle>
            <CardDescription>Most common user departments</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topDepartments.map(([dept, count], index) => (
                <div key={dept} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-medium">
                      {index + 1}
                    </div>
                    <span className="text-sm font-medium">{dept}</span>
                  </div>
                  <Badge variant="outline">{count} users</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top States Card */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              Top Locations
            </CardTitle>
            <CardDescription>Users by state distribution</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topStates.map(([state, count], index) => (
                <div key={state} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-medium">
                      {index + 1}
                    </div>
                    <span className="text-sm font-medium">{state}</span>
                  </div>
                  <Badge variant="outline">{count} users</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HomeComponent;
