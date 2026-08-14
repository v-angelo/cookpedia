import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminModuleRoutingModule } from './admin-module-routing-module';
import { AdminDashboard } from './admin-dashboard/admin-dashboard';
import { DownloadList } from './download-list/download-list';
import { AdminHeader } from './admin-header/admin-header';
import { AdminSidebar } from './admin-sidebar/admin-sidebar';
import { FeedbackList } from './feedback-list/feedback-list';
import { RecipeList } from './recipe-list/recipe-list';
import { ManageRecipe } from './manage-recipe/manage-recipe';
import { UserList } from './user-list/user-list';

@NgModule({
  declarations: [
    AdminDashboard,
    DownloadList,
    AdminHeader,
    AdminSidebar,
    FeedbackList,
    RecipeList,
    ManageRecipe,
    UserList,
  ],
  imports: [CommonModule, AdminModuleRoutingModule],
})
export class AdminModuleModule {}
