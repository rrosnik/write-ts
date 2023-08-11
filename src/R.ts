import { Entity } from "./E";
import { IfcOwnerHistory } from "./O";
import { Guid, IfcLabel, IfcText } from "./types";

export class IfcRoot extends Entity { //BaseClassIfc, NamedObjectIfc
    private mOwnerHistory: IfcOwnerHistory | null = null; // : IfcOwnerHistory  IFC4  OPTIONAL;
    private mGuid: Guid = "";
    private mGlobalId: string = "";
    private mName: IfcLabel = ""; //: OPTIONAL IfcLabel;
    private mDescription: IfcText = ""; //: OPTIONAL IfcText; 

    public get Name(): IfcLabel { return this.mName; }
    public set Name(value: IfcLabel) { this.mName = value; }

    public get Description(): IfcText { return this.mDescription; }
    public set Description(value: IfcText) { this.mDescription = value; }

    public get GlobalId(): string { return this.mGlobalId; }
    public set GlobalId(value: string) {
        if (!string.IsNullOrEmpty(value)) {
            if (string.Compare(mGlobalId, value, false) != 0) {
                if (mDatabase != null) {
                    if (!string.IsNullOrEmpty(mGlobalId))
                        mDatabase.mDictionary.TryRemove(mGlobalId, out BaseClassIfc obj);
                    mDatabase.mDictionary[value] = this;
                }
                setGlobalId(value);
            }
        }
    }
    public get Guid(): Guid { return this.mGuid; }
    public set Guid(value: any) {
        if (value != Guid.Empty)
            GlobalId = ParserIfc.EncodeGuid(value);
    }
    public get OwnerHistory(): IfcOwnerHistory { return this.mOwnerHistory; }
    public set OwnerHistory(value: IfcOwnerHistory) { this.mOwnerHistory = value; }


    public constructor(props?: IfcRoot) {
        super(props);
        setGlobalId(ParserIfc.EncodeGuid(Guid.NewGuid()));
        if (props) {
            this.OwnerHistory = (props.OwnerHistory) ? new IfcOwnerHistory(props.OwnerHistory) : undefined;
        }
    }


    protected IfcRoot(DatabaseIfc db): base(db)
    {
        setGlobalId(ParserIfc.EncodeGuid(Guid.NewGuid()));
        if (db != null && (db.Release < ReleaseVersion.IFC4 || (db.mModelView != ModelView.Ifc4Reference && db.Factory.Options.GenerateOwnerHistory)))
            OwnerHistory = db.Factory.OwnerHistoryAdded;
    }
    protected IfcRoot(IfcRoot root) : base(root.Database)
{
    OwnerHistory = root.OwnerHistory;
    Name = root.Name;
    Description = root.Description;
}
    protected IfcRoot(DatabaseIfc db, IfcRoot r, DuplicateOptions options) : base(db, r)
{
    if (db[r.GlobalId] == null)
        GlobalId = r.GlobalId;
    if (options.OwnerHistory != null)
        OwnerHistory = options.OwnerHistory;
    else if (options.DuplicateOwnerHistory && r.mOwnerHistory != null)
        OwnerHistory = db.Factory.Duplicate(r.OwnerHistory, options) as IfcOwnerHistory;
    mName = r.mName;
    mDescription = r.mDescription;
}
    protected IfcRoot(DatabaseIfc db, IfcRoot r, IfcOwnerHistory ownerHistory) : base(db, r)
{
    if (db[r.GlobalId] == null)
        GlobalId = r.GlobalId;
    if (ownerHistory != null)
        OwnerHistory = ownerHistory;
    else if (r.mOwnerHistory != null)
        OwnerHistory = db.Factory.Duplicate(r.OwnerHistory) as IfcOwnerHistory;
    mName = r.mName;
    mDescription = r.mDescription;
}
    internal override bool isDuplicate(BaseClassIfc e, double tol)
{
        IfcRoot root = e as IfcRoot; // || root.mOwnerHistory != mOwnerHistory
    if (root == null || string.Compare(root.Name, Name) != 0 || string.Compare(root.Description, Description) != 0)
        return false;
    return base.isDuplicate(e, tol);
}
}