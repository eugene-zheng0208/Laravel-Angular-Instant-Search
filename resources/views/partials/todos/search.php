<div ng-controller="TodoController" ng-init="find()">
     <div class="form-group">
            <h3>Ajax search using AngularJs</h3>
            <input type="text" class="form-control input-md" ng-model="searchString" placeholder="Enter your search terms" ng-change="ajaxLoad()" />
    </div>
    <div class="row" ng-repeat="todo in todos">
        <div class="col-lg-6">
            <div class="input-group">
                <a href="#/">{{todo.body}}</a>
            </div>
        </div>
    </div>
</div>
