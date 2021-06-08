import IServiceContainer from './IServiceContainer';
import IEpiserverContext from './IEpiserverContext';
import IStateReducerInfo from './IStateReducerInfo';
export interface IInitializableModule {
    /**
     * The sort order of the modules when loaded using the initial bootstrapping
     * sequence.
     */
    readonly SortOrder: number;
    /**
     * Retrieve the name of the module
     *
     * @returns { string }
     */
    GetName(): string;
    ConfigureContainer(container: IServiceContainer): void;
    StartModule(context: IEpiserverContext): void;
    GetStateReducer(): IStateReducerInfo<any> | null;
}
export default IInitializableModule;
export declare abstract class BaseInitializableModule implements IInitializableModule {
    protected name: string;
    readonly SortOrder: number;
    GetName(): string;
    ConfigureContainer(container: IServiceContainer): void;
    StartModule(context: IEpiserverContext): void;
    GetStateReducer(): IStateReducerInfo<any> | null;
}
